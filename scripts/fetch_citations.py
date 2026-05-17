import json
import urllib.request
from datetime import datetime, timezone

AUTHOR_ID = "A5090426678"
BASE = "https://api.openalex.org"
MAILTO = "srlee617@gmail.com"


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": f"mailto:{MAILTO}"})
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())


def main():
    # 저자 전체 통계
    author = fetch(f"{BASE}/authors/{AUTHOR_ID}?mailto={MAILTO}")
    author_stats = {
        "cited_by_count": author["cited_by_count"],
        "h_index":        author["summary_stats"]["h_index"],
        "i10_index":      author["summary_stats"]["i10_index"],
        "works_count":    author["works_count"],
    }

    # 논문별 인용 수 (DOI 키)
    works_data = {}
    page, per_page = 1, 50
    while True:
        url = (
            f"{BASE}/works?filter=author.id:{AUTHOR_ID}"
            f"&select=doi,cited_by_count,counts_by_year"
            f"&per_page={per_page}&page={page}&mailto={MAILTO}"
        )
        data = fetch(url)
        for w in data["results"]:
            doi = w.get("doi")
            if doi:
                works_data[doi] = {
                    "cited_by_count": w["cited_by_count"],
                    "counts_by_year": w.get("counts_by_year", [])[:3],
                }
        if len(data["results"]) < per_page:
            break
        page += 1

    output = {
        "updated_at": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "author":     author_stats,
        "works":      works_data,
    }

    with open("_data/citations.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"Done: {len(works_data)} works, cited_by_count={author_stats['cited_by_count']}, h_index={author_stats['h_index']}")


if __name__ == "__main__":
    main()

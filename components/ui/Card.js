import Image from "next/image";
import Link from "next/link";
export default function Card(articles) {
  const items = articles.articles;

  return (
    <div className="grid pl-2 pr-2 md:p-0 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {items.map((item, key) => {
        return (
          <Link href={`/post/${encodeURIComponent(item.id)}`} key={key}>
            <div className="card shadow-lg border-1 shadow-slate-200 border-gray-500 mb-5" key={key}>
              <figure className="card-side">
                <Image
                  src={item.multimedia[0].url}
                  alt={item.multimedia[0].caption}
                  width="320"
                  layout="responsive"
                  height="320"
                  className="object-cover"
                  priority={true}
                />
              </figure>
              <div className="card-body p-3">
                <h2 className="card-title leading-tight text-gray-900 text-ellipsis">
                  {item.title}
                </h2>
                <p className="text-ellipsis text-xs text-gray-800">
                  {item.abstract}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

import markdownStyles from "../styles/markdown-styles.module.css";

export default function ProductBody({ content }) {
  return (
    <>
      <div className="max-w-l mx-auto">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

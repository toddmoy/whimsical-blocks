import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks"

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const language = Boolean(context.path)
    ? getLanguageFromFilename(context.path)
    : "N/A";

  return (
    <iframe width="100%" height="100%" style={{"border": 0}} src={content}></iframe>
  );
}
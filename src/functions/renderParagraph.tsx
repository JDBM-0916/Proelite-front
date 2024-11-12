interface RenderParagraphProps {
  paragraph: string;
  paragraphEnfasis: string[];
}

export const renderParagraph = ({ paragraph, paragraphEnfasis }: RenderParagraphProps): React.ReactNode[] => {
  const result: React.ReactNode[] = []; // Cambiado 'let' a 'const'
  let lastIndex = 0;

  paragraphEnfasis.forEach((highlightedText) => {
    const startIndex = paragraph.indexOf(highlightedText, lastIndex);
    if (startIndex !== -1) {
      if (startIndex > lastIndex) {
        result.push(
          <span key={`normal-${lastIndex}`}>
            {paragraph.slice(lastIndex, startIndex)}
          </span>
        );
      }
      result.push(
        <span key={`highlight-${startIndex}`} className="font-bold">
          {highlightedText}
        </span>
      );
      lastIndex = startIndex + highlightedText.length;
    }
  });

  if (lastIndex < paragraph.length) {
    result.push(
      <span key={`normal-${lastIndex}`}>{paragraph.slice(lastIndex)}</span>
    );
  }

  return result;
};

'use client';
import PropTypes from 'prop-types';

export default function Heading({
  text = '',
  spanText = '',
  spanColor = 'text-black',
  spanSize = '',
  spanFontWeight = 'font-black',
  color = 'text-white',
  size = 'text-7xl',
  centered = true,
  fontWeight = 'font-black',
  inActiveHeading = false,
  breakSpan = false,
  className = '',
}) {
  // Split text into parts around spanText
  const parts = spanText ? text.split(spanText) : [text];

  // Apply 20% opacity if inActiveHeading is true
  const getColorWithOpacity = (colorClass) => {
    if (!inActiveHeading) return colorClass;
    const colorName = colorClass.replace('text-', '');
    return `text-${colorName}/20`;
  };

  // Split text into words while preserving trailing spaces
  const splitIntoWordsWithSpaces = (string) => {
    const words = [];
    const parts = string.split(' ');
    for (let i = 0; i < parts.length; i++) {
      if (parts[i]) {
        words.push(i === parts.length - 1 ? parts[i] : parts[i] + ' ');
      }
    }
    return words;
  };

  // Reconstruct text with proper spacing
  const reconstructTextWithSpacing = () => {
    let result = parts[0] || '';
    if (spanText) {
      if (!breakSpan && result && !result.endsWith(' ') && !spanText.startsWith(' ')) {
        result += ' ';
      }
      result += spanText;
      if (!breakSpan && parts[1] && !spanText.endsWith(' ') && !parts[1].startsWith(' ')) {
        result += ' ';
      }
      result += parts[1] || '';
    }
    return result;
  };

  // Determine styling for each word
  const getWordStyling = (wordText, wordStartIndex, fullText) => {
    if (!spanText) {
      return {
        color: getColorWithOpacity(color),
        size: '',
        weight: '',
        isSpan: false,
      };
    }

    const spanStart = fullText.indexOf(spanText);
    const spanEnd = spanStart + spanText.length;
    const isSpanWord = wordStartIndex >= spanStart && wordStartIndex < spanEnd;

    return {
      color: isSpanWord ? getColorWithOpacity(spanColor) : getColorWithOpacity(color),
      size: isSpanWord ? spanSize : '',
      weight: isSpanWord ? spanFontWeight : '',
      isSpan: isSpanWord,
    };
  };

  // Render the heading
  const fullText = reconstructTextWithSpacing();
  const allWords = splitIntoWordsWithSpaces(fullText);
  let currentIndex = 0;

  return (
    <h1
      className={`${centered ? 'text-center' : ''} ${getColorWithOpacity(color)} ${size} ${fontWeight} ${className}`}
      style={{
        wordBreak: 'normal',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
      }}
    >
      {allWords.map((word, wordIndex) => {
        const styling = getWordStyling(word, currentIndex, fullText);
        const wordToRender = word.replace(/\s+$/, ''); // Remove trailing space for display
        const hasTrailingSpace = word !== wordToRender;

        const element = (
          <span
            key={`word-${wordIndex}`}
            className={`${styling.color} ${styling.size} ${styling.weight} ${
              styling.isSpan && breakSpan ? 'block mt-0' : ''
            }`}
            style={{ display: 'inline-block' }}
          >
            {wordToRender}
            {hasTrailingSpace && '\u00A0'}
          </span>
        );

        currentIndex += word.length;
        return element;
      })}
    </h1>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  spanText: PropTypes.string,
  spanColor: PropTypes.string,
  spanSize: PropTypes.string,
  spanFontWeight: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  centered: PropTypes.bool,
  fontWeight: PropTypes.string,
  inActiveHeading: PropTypes.bool,
  breakSpan: PropTypes.bool,
  className: PropTypes.string,
};
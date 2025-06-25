'use client';
import PropTypes from 'prop-types';

export default function Heading({
  text = '',
  spanText = '',
  spanColor = 'text-white',
  spanSize = '',
  spanFontWeight = 'font-black',
  color = 'text-white',
  size = 'text-5xl',
  centered = true,
  fontWeight = 'font-semibold',
  inActiveHeading = false,
  breakSpan = false,
  className = '',
}) {
  // Apply 20% opacity if inActiveHeading is true
  const getColorWithOpacity = (colorClass) => {
    if (!inActiveHeading) return colorClass;
    const colorName = colorClass.replace('text-', '');
    return `text-${colorName}/20`;
  };

  // Split text into parts around spanText
  const parts = spanText ? text.split(spanText) : [text];

  // Reconstruct text with proper spacing and line breaks
  const renderHeadingContent = () => {
    if (!spanText) {
      return (
        <span className={`${getColorWithOpacity(color)}`}>
          {text}
        </span>
      );
    }

    return (
      <>
        {parts[0] && (
          <span className={`${getColorWithOpacity(color)}`}>
            {parts[0]}
          </span>
        )}
        
        {breakSpan ? (
          <>
            <br />
            <span className={`${getColorWithOpacity(spanColor)} ${spanSize} ${spanFontWeight} block`}>
              {spanText}
            </span>
          </>
        ) : (
          <span className={`${getColorWithOpacity(spanColor)} ${spanSize} ${spanFontWeight}`}>
            {spanText}
          </span>
        )}
        
        {parts[1] && (
          <span className={`${getColorWithOpacity(color)}`}>
            {parts[1]}
          </span>
        )}
      </>
    );
  };

  return (
    <h1
      className={`${centered ? 'text-center' : ''} ${size} ${fontWeight} ${className}`}
      style={{
        wordBreak: 'normal',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
      }}
    >
      {renderHeadingContent()}
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
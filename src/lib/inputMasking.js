export default function conformInputToMasking(
  currentValue,
  placeholder,
  charset = null
) {
  const maskedNumber = "xXMDY";
  const maskedLetter = "_";
  const placehold = charset || placeholder;
  const placeholderLength = placehold.length;
  let newValue = "";

  const strippedValue = charset
    ? currentValue.replace(/\W/g, "") // only keeps A-Z, a-z, 0-9, _
    : currentValue.replace(/\D/g, ""); // only keeps 0-9 (digits)

  for (let i = 0, j = 0; i < placeholderLength; i++) {
    // break if no characters left and the pattern is non-special character
    if (strippedValue[j] === undefined) {
      break;
    }
    const parseAsIntVal = parseInt(strippedValue[j], 10);

    const valueIsInt =
      typeof parseAsIntVal === "number" && parseAsIntVal % 1 === 0;
    const valueIsLetter = strippedValue[j]
      ? strippedValue[j].match(/[A-Z]/i)
      : false;

    const matchesMaskedNumberSym = maskedNumber.indexOf(placehold[i]) >= 0;
    const matchesMaskedLetterSym = maskedLetter.indexOf(placehold[i]) >= 0;

    if (
      (matchesMaskedNumberSym && valueIsInt) ||
      (charset && matchesMaskedLetterSym && valueIsLetter)
    ) {
      // eslint-disable-next-line no-plusplus
      newValue += strippedValue[j++];
    } else if (
      (!charset && !valueIsInt && matchesMaskedNumberSym) ||
      (charset &&
        ((matchesMaskedLetterSym && !valueIsLetter) ||
          (matchesMaskedNumberSym && !valueIsInt)))
    ) {
      // user is typing characters in 'maskedNumber' & 'maskedLetter
      // this.options.onError( e ); // write your own error handling function
      return newValue;
    } else {
      // user
      newValue += placehold[i];
    }
  }
  return newValue;
}

export function updateInputShellValue(currentValue, placeholder) {
  return `<i>${currentValue}</i>${placeholder.substring(currentValue.length)}`;
}

export class ClientInputMasking {
  constructor() { 
    alert("helloooooo testing for real!");
  }
}

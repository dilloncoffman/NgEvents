import { FormControl } from '@angular/forms';

// CUSTOM VALIDATOR = function in this case for restricted words
export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any } => {
    // return type is just an object
    // Check to see if control's value contains restricted words
    // Below, 'restrictedWords' is the key to use when working in the HTML template file like so: abstract.errors.restrictedWords and the value of that will contain in this case, the value of the words considered to be restricted
    if (!words) return null;

    // Construct invalidWords, removing any passing null values (words that weren't considered invalid)
    let invalidWords = words
      .map((word) => (control.value.includes(word) ? word : null))
      .filter((word) => word != null);

    return control.value.includes('foo')
      ? { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}

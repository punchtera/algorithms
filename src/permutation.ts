function permutation(str: string) {
  stringPermutation(str, "");
}

function stringPermutation(str: string, prefix: string) {
  if (str.length === 0) {
    console.log("prefix---", prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      const rem = str.substring(0, i) + str.substring(i + 1);
      stringPermutation(rem, prefix + str.charAt(i));
    }
  }
}

export { permutation };

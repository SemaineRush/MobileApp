import React from 'react';

const regex = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[\d]/,
    specialChar: /[!\"#$%&\'\(\)*+,\-./:;<=>?@\[\\\]^_\`\{|\}~àâçéèêëîïôûùüÿñæœ ]/i,
    nameSpecialChar: /[.,!\"#$%&\(\)*+/:;<=>?@\[\\\]^_\`\{|\}~]/i,
    supAddress: /.+\..+@supinternet\.fr/i
}

export default regex;
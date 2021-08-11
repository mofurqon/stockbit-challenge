const findFirstStringInBracket = (str) => {
    if ( !str || typeof(str) != 'string' ) {
        return;
    }

    const firstIndex = str.indexOf("(");
    if ( firstIndex < 0 ) {
        return;
    }

    const lastIndex = str.indexOf(")");
    if ( lastIndex < 0 ) {
        return;
    }

    return str.substring(firstIndex + 1, lastIndex);
}

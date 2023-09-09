const formatString = (string) => {
    return string.replace(/(\*\*)(.*?)\1/g, '<strong>$2</strong>');
}

export { formatString };
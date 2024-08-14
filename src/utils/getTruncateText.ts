const getTruncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    }

    const truncated = text.substring(0, maxLength - 3);
    return truncated + '...';
}

export { getTruncateText }
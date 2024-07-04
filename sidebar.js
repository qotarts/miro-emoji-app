document.getElementById('randomEmoji').addEventListener('click', () => {
    const emojiList = ['😀', '😂', '🥰', '😎', '😭', '🤯', '😱', '😍'];
    const mix = () => {
        const first = emojiList[Math.floor(Math.random() * emojiList.length)];
        const second = emojiList[Math.floor(Math.random() * emojiList.length)];
        return first + second;
    };
    const mixedEmoji = mix();
    document.getElementById('emojiDisplay').innerText = mixedEmoji;
});



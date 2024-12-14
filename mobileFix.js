document.querySelectorAll('.nft-name').forEach(name => {
    if (window.innerWidth <= 768) { // Check if it's mobile
        const words = name.textContent.split(' ');
        if (words.length > 1) {
            name.innerHTML = `${words[0]}<br>${words.slice(1).join(' ')}`;
        }
    }
});

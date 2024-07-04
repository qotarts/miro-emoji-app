miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Emoji Mixer',
        svgIcon: '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.22 0-4-1.78-4-4s1.78-4 4-4 4 1.78 4 4-1.78 4-4 4z"/></svg>',
        onClick: () => {
          miro.board.ui.openLeftSidebar('sidebar.html');
        }
      }
    }
  });
});

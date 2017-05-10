module.exports = {
  config: {
    summonShortcut: 'Ctrl+P',
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: 'Inconsolata, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#C0C0C0',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // color of the text
    foregroundColor: '#BEBDBD',

    // terminal background color
    backgroundColor: '#1C1C1C',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: `
      .hyper_main {
        border-color: transparent !important;
      }

      .terms_termGroup:only-child {
        margin-top: -15px;
        height: calc(100% + 15px);
      }
    `,

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` if you're using a Linux set up
    // that doesn't shows native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: false,

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#E7452D',
      green: '#5CBC12',
      yellow: '#C0BD21',
      blue: '#7095DC',
      magenta: '#C444C0',
      cyan: '#52BFC1',
      white: '#C0C0C0',
      lightBlack: '#5D5D5D',
      lightRed: '#E95F5A',
      lightGreen: '#72EE5D',
      lightYellow: '#FCF55B',
      lightBlue: '#5D66FA',
      lightMagenta: '#E268FD',
      lightCyan: '#8AEDEF',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '/usr/local/bin/zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false,
  },

  plugins: [
    'hypercwd',
    'hyperterm-summon'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};

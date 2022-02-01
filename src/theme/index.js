// import { purple } from '@mui/material/colors';

import { mainColor, secondaryColor } from './colors';

// import typography from './typography';
// import overrides from './overrides';


const getDesignTokens = (mode) => ({
    palette: {
        mode: mode,
        ...(mode === 'light' ? 
            {
                primary: {
                    light: mainColor[50],
                    main: mainColor[500],
                    dark: mainColor[900],
                    // contrastText: will be calculated to contrast with palette.primary.main
                },
                secondary: {
                    light: secondaryColor[50],
                    main: secondaryColor[500],
                    dark: secondaryColor[900],
                    // contrastText: '#ffcc00',
                },
                // error: {
            
                // },
                // warning: {
            
                // },
                // info: {
            
                // },
                // success: {
            
                // },
                // text: {
                //     primary: mainColor[900],
                //     secondary: mainColor[900]
                // },
                // Used by `getContrastText()` to maximize the contrast between
                // the background and the text.
                contrastThreshold: 3,
                // Used by the functions below to shift a color's luminance by approximately
                // two indexes within its tonal palette.
                // E.g., shift from Red 500 to Red 300 or Red 700.
                tonalOffset: 0.2,
                background: {
                    paper: '#fff',
                    default: '#fff'
                }
            }
        : 
            {
                primary: {
                    light: secondaryColor[50],
                    main: secondaryColor[500],
                    dark: secondaryColor[900],
                    // contrastText: '#ffcc00',
                },
                secondary: {
                    light: mainColor[50],
                    main: mainColor[500],
                    dark: mainColor[900],
                    // contrastText: will be calculated to contrast with palette.primary.main
                },
                // error: {
            
                // },
                // warning: {
            
                // },
                // info: {
            
                // },
                // success: {
            
                // },
                // text: {
                //     primary: mainColor[900],
                //     secondary: mainColor[900]
                // },
                // Used by `getContrastText()` to maximize the contrast between
                // the background and the text.
                contrastThreshold: 3,
                // Used by the functions below to shift a color's luminance by approximately
                // two indexes within its tonal palette.
                // E.g., shift from Red 500 to Red 300 or Red 700.
                tonalOffset: 0.2,
                background: {
                    default: "#222222"
                },
                text: {
                    primary: "#ffffff"
                }              
            }
        ),
    },
    // component: {
    //     MUIFab: {
    //         styleOverrides: {
    //            secondary: {
    //                '&:hover':{
    //                    color: 'white'
    //                }
    //            }
    //         }
    //     }
    // }
});


// If the "dark" and / or "light" keys are omitted, their value(s) will be calculated from "main", according to the "tonalOffset" value.
// If "contrastText" is omitted, its value will be calculated to contrast with "main", according to the "contrastThreshold" value.

export default getDesignTokens;

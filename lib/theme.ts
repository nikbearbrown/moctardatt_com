export const theme = {
  // nbb — Brutalist Default (walnut variant)
  // bg: #FFFFFF (pure white)
  colors: {
    bb1: '#0D0D0D',  // soot black — primary text        19.44:1 AAA
    bb2: '#4A4A4A',  // iron grey — primary accent         8.86:1 AAA
    bb3: '#8B0000',  // dried-ink red — danger/emphasis   10.01:1 AAA
    bb4: '#5C3317',  // walnut — warm accent              10.82:1 AAA
    bb5: '#2F2F2F',  // charcoal — secondary accent       13.39:1 AAA
    bb6: '#6B6B5E',  // tarnished pewter — muted accent    5.4:1  AA
    bb7: '#9B957F',  // aged ledger tan — borders          3.0:1  AA large
    bb8: '#FFFFFF',  // pure white — page background
  },
  semantic: {
    text:       'bb1',
    accent:     'bb2',
    danger:     'bb3',
    warmAccent: 'bb4',
    secondary:  'bb5',
    muted:      'bb6',
    border:     'bb7',
    background: 'bb8',
  },
} as const

export type Theme = typeof theme

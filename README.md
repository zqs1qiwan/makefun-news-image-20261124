# makefun-news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/zqs1qiwan/makefun-news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/zqs1qiwan/makefun-news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A one-image front-page summary of Tuesday 24 November 2026's world news — Nvidia reinstates Jensen Huang, Ukraine sinks a Russian warship off Libya, Moscow warns Estonia, jets scrambled over Korea, and the 2031 Women's World Cup hosts are announced. The program copies the image to the output path.

`entry.png` is built by `build_image.py` (Python 3, Pillow, standard library plus Pillow) from the 1600px source illustration in `assets/entry-source.png`: it keeps the masthead and the five illustrations, re-typesets all body text with Noto Sans Condensed, fixes the flag on the sinking ship to the Russian tricolour, and gives the three extra stories a full legible band instead of a tiny footer strip. Re-running it writes byte-identical output.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=32aprefc&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>

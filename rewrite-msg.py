#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys, re

mapfile = 'commit-name-map.txt'
mapd = {}
with open(mapfile, encoding='utf-8') as f:
    for line in f:
        line=line.rstrip('\n')
        if not line: continue
        k,v=line.split('\t',1)
        mapd[k]=v

msg = sys.stdin.read()
m = re.search(r"Adiciona '([^']+)'", msg)
if m:
    name = m.group(1)
    # decode octal escapes like \303\247
    name = re.sub(r'\\([0-7]{3})', lambda mo: chr(int(mo.group(1),8)), name)
    k = name.lower()
    k = re.sub(r'^\d+[_-]*','',k)
    k = re.sub(r'[_-]+',' ',k)
    k = re.sub(r'\.[^\.]+$','',k)
    k = re.sub(r'\W+','',k)
    # prefer algorithmic pretty name (split camelCase, underscores, hyphens), fallback to mapping only if needed
    pretty = re.sub(r'^\d+[_-]*','',name)
    pretty = re.sub(r'[_-]+',' ',pretty)
    pretty = re.sub(r'([a-z])([A-Z])', r'\1 \2', pretty)
    pretty = pretty.strip().lower()
    if pretty and len(pretty) > 0:
        print('feat: add {}'.format(pretty))
    elif k in mapd:
        print('feat: add {}'.format(mapd[k]))
    else:
        # last resort: use simplified key
        print('feat: add {}'.format(k))
else:
    sys.stdout.write(msg)

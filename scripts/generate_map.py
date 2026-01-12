#!/usr/bin/env python3
# Generate commit-name-map.txt reliably with UTF-8 handling
import os, re, sys
root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
entries = [e for e in os.listdir(root) if e != '.git']
lines = []
for e in entries:
    name = e.rstrip('/')
    simp = re.sub(r'^\d+[_-]*','', name)
    simp_no_ext = re.sub(r'\.[^\.]+$','', simp)
    key = re.sub(r'\W+','', simp_no_ext.lower())
    pretty = re.sub(r'([a-z])([A-Z])', r'\1 \2', simp_no_ext)
    pretty = re.sub(r'[_-]+',' ', pretty).strip().lower()
    lines.append((key, pretty))

out = os.path.join(root, 'commit-name-map.txt')
with open(out, 'w', encoding='utf-8') as f:
    for k,p in lines:
        f.write(f"{k}\t{p}\n")
print(f"Wrote {out}")
# copy to C:\scripts if exists
try:
    dest = 'C:/scripts/commit-name-map.txt'
    with open(dest, 'w', encoding='utf-8') as f:
        for k,p in lines:
            f.write(f"{k}\t{p}\n")
    print(f"Also wrote {dest}")
except Exception:
    pass

# test pretty generation
import re
names = ["21_logicalOperators","logicalOperators","logicaloperators","Fun\303\247\303\265es","operators.js"]
for name in names:
    raw = name
    # decode octal sequences like \303\247 to proper UTF-8
    def decode_octal(s):
        import re
        if '\\' in s:
            # replace octal escapes with latin-1 bytes and then decode as utf-8
            s2 = re.sub(r'\\([0-7]{3})', lambda m: chr(int(m.group(1),8)), s)
            try:
                s3 = s2.encode('latin-1').decode('utf-8')
                return s3
            except Exception as e:
                return s
        return s
    name_dec = decode_octal(name)
    k = name_dec.lower()
    pretty = re.sub(r'^\d+[_-]*','',name_dec)
    pretty = re.sub(r'[_-]+',' ',pretty)
    pretty = re.sub(r'([a-z])([A-Z])', r'\1 \2', pretty)
    pretty = pretty.strip().lower()
    print(f"orig: {raw} | decoded: {name_dec} | pretty: {pretty}")

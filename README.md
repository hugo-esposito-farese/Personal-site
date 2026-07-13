## 1. LA TABLE À CONNAÎTRE PAR CŒUR

C'est la base de tout. Un masque, c'est une suite de `1` en binaire suivie de `0`. Il n'existe que 9 valeurs possibles par octet — apprends-les dans l'ordre, elles reviennent tout le temps :

| CIDR (bits) | Valeur décimale | Taille du bloc |  |
| --- | --- | --- | --- |
| /24 (0 bit hôte dans cet octet) | 255 | 1 |  |
| /25 | 128 | 128 |  |
| /26 | 192 | 64 |  |
| /27 | 224 | 32 |  |
| /28 | 240 | 16 |  |
| /29 | 248 | 8 |  |
| /30 | 252 | 4 |  |
| /31 | 254 | 2 |  |
| /32 | 255 | — (host unique) |  |

**Astuce mnémotechnique : `256 - valeur_du_masque = taille_du_bloc`.**
Exemples : 256-128=128 · 256-192=64 · 256-224=32 · 256-240=16 · 256-248=8 · 256-252=4.
Tu n'as besoin de retenir QUE cette table + cette soustraction. Tout le reste s'en déduit.

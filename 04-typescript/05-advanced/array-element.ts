const species = ['rabbit', 'bear', 'fox', 'dog'] as const
type Species = typeof species[number]

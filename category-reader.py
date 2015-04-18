cats = open("categories.txt")
catsList = []
for line in cats:
	choppedLine = "".join(line.split("/")[0])
	choppedLine.strip()
	catsList.append(choppedLine.strip())

catsSet = list(set(catsList))
catsSet.sort()
for line in catsSet:
	print(line)

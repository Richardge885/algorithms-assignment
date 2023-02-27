# Linear Search function


def find(arr, findItem):
    for position in range(len(arr)):
        if findItem == arr[position]:
            return str(position)

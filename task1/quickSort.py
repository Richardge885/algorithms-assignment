# Quick Sort algorithm implementation


def sort(arr, start, end):
    if start < end:
        pivot_index = partition(arr, start, end)
        print(arr)  # Print array after partition
        sort(arr, start, pivot_index - 1)
        sort(arr, pivot_index + 1, end)
    print(arr)
    return arr


def partition(arr, start, end):
    pivot = arr[end]
    boundary = start - 1
    for j in range(start, end):
        if arr[j] < pivot:
            boundary += 1
            arr[boundary], arr[j] = arr[j], arr[boundary]
    arr[boundary + 1], arr[end] = arr[end], arr[boundary + 1]
    return boundary + 1

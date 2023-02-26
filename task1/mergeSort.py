# # Merge Sort algorithm code
# def sort(arr):
#     if len(arr) == 1:
#         return arr
#     length = len(arr)
#     mid = length // 2
#     left = arr[:mid]
#     right = arr[mid:]
#     print("Left {}".format(left))
#     print("Right {}".format(right))

#     return merge(sort(left), sort(right))


# def merge(left, right):
#     result = []
#     leftindex = 0
#     rightindex = 0
#     while leftindex < len(left) and rightindex < len(right):
#         if left[leftindex] < right[rightindex]:
#             result.append(left[leftindex])
#             leftindex += 1
#         else:
#             result.append(right[rightindex])
#             rightindex += 1
#     print(left, right)
#     print(result + left[leftindex:] + right[rightindex:])
#     return result + left[leftindex:] + right[rightindex:]

# Merge Sort Algorithm Implementation
def sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        sort(left_half)
        sort(right_half)

        i = j = k = 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1

        # print(arr)  # Print array after each merge step
    return arr

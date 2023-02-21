# Menu option at beginning of program
def menu(dataset):
    choice = input("Enter 1 for Quick Sort\nEnter 2 for Merge Sort\n")
    if choice == 1:
        quickSort(dataset)
    elif choice == 2:
        mergeSort(dataset)
    else:
        print("Please enter a valid option")
        menu(dataset)


# Quick Sort algorithm code
def quickSort(dataset):
    pass


# Merge Sort algorithm code
def mergeSort(dataset):
    pass


if __name__ == "__main__":
    # Dataset change numbers for different results
    # Only valid when working with numbers
    dataset = [1, 4, 2, 3, 5, 9, 7, 8]
    menu(dataset)

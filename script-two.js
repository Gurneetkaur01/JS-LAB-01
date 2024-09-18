const library = [
    {
      title: "Book One",
      author: "Author A",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "Book Two",
      author: "Author B",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "Book Three",
      author: "Author C",
      status: {
        own: true,
        reading: false,
        read: false
      }
    }
  ];

  library.forEach(book => {
    book.status.read = true;
  });
  const { title: firstBook } = library[0];

  const libraryJson = JSON.stringify(library, null, 2);
console.log(libraryJson);

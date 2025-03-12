import requests
from bs4 import BeautifulSoup
import os

def get_links(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to access {url}")
        return []
    
    soup = BeautifulSoup(response.text, 'html.parser')
    links = [a['href'] for a in soup.find_all('a', href=True)]
    return links

def traverse_and_fetch(base_url, current_path="", unique_lines=set()):
    url = os.path.join(base_url, current_path)
    links = get_links(url)
    
    for link in links:
        if link in ('../', './'):
            continue
        
        new_path = os.path.join(current_path, link)
        full_url = os.path.join(base_url, new_path)
        
        if link.endswith('/'):  # Directory
            traverse_and_fetch(base_url, new_path, unique_lines)
        else:  # File
            file_response = requests.get(full_url)
            if file_response.status_code == 200:
                content = file_response.text
                for line in content.splitlines():
                    unique_lines.add(line)
            else:
                print(f"Failed to fetch {full_url}")
    
    with open("README.txt", "w") as f:
        f.write("\n".join(sorted(unique_lines)))

if __name__ == "__main__":
    base_url = "http://10.12.100.90//.hidden/"
    traverse_and_fetch(base_url)
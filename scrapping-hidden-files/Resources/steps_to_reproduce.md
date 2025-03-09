

in the exploit ``robots-admin-password`` we discovered the page ``/.hidden`` with robots.txt file.

when accessing the ``/.hidden`` page we found a lot of directories and ``README`` file inside every directory with a message. ther is certenly a file containing the flag here but it's hard to find it manually.

so we wrote a script to scrap all the directories and files and search for the flag.

and boom we found the flag in ``.hidden/whtccjokayshttvxycsvykxcfm/igeemtxnvexvxezqwntmzjltkt/lmpanswobhwcozdqixbowvbrhw/README``
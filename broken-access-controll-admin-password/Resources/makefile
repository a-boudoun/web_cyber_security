build:
	docker build -t kali-dirb .
run:
	docker run --rm --network host -v /Users/aboudoun/Desktop/darkly/broken-access-controll-admin-password/Resources:/output kali-dirb dirb http://10.12.100.90/ /usr/share/dirb/wordlists/common.txt -o /output/scan.txt
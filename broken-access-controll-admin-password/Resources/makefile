build:
	docker build -t kali-dirb .
run:
	docker run --rm --network host -v /Users/aboudoun/Desktop/darkly/robots-admin-password/Resources/output.txt:/output kali-dirb dirb http://10.12.100.119/ /usr/share/dirb/wordlists/common.txt -o /output/scan.txt
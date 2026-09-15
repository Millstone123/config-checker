.PHONY: setup check

setup:
	@echo "Installing Config Checker..."
	@node scripts/init.js
	@echo "Installation complete."

check:
	@echo "Checking configuration..."
	@node scripts/check.js
	@echo "Check complete."

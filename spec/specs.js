describe("Contact", function() {
	describe("fullName", function() {
		it("combines the first and last name, separated by a space", function() {
			var testContact = Object.create(Contact);
			testContact.firstName = "Dolly";
			testContact.lastName = "Parton";
			testContact.fullName().should.equal("Dolly Parton");
		});
	});
});

describe("Address", function() {
	describe("fullAddress", function() {
		it("returns the full address with nice formatting", function() {
			var testAddress = Object.create(Address);
			testAddress.street = "123 4th Ave";
			testAddress.city = "Portland";
			testAddress.state = "Oregon";
			testAddress.fullAddress().should.equal("123 4th Ave, Portland, Oregon");
		});
	});
	describe("validAddress", function() {
		it("returns true if user inputs a street, city, and state", function() {
			var testAddress = Object.create(Address);
			testAddress.street = "123 4th Ave";
			testAddress.city = "Portland";
			testAddress.state = "Oregon";
			testAddress.validAddress().should.equal(true);
		});
		it("returns false if the user does not input a street, city, or state", function() {
			var testAddress = Object.create(Address);
			testAddress.street = "123 4th Ave";
			testAddress.city = "";
			testAddress.state = "Oregon";
			testAddress.validAddress().should.equal(false);
		});
	});
});

describe("PhoneNumber", function() {
	describe("showPhoneNumber", function() {
		it("returns the phone number with nice formatting", function() {
			var testPhone = Object.create(PhoneNumber);
			testPhone.number = "8881234567";
			testPhone.showPhoneNumber().should.equal("888-123-4567");
		});
	});
	describe("validPhone", function() {
		it("returns false if the string is not ten characters long", function() {
			var testPhone = Object.create(PhoneNumber);
			testPhone.number = "888123456";
			testPhone.validPhone().should.equal(false);
		});
		it("returns true if the string IS ten characters long", function() {
			var testPhone = Object.create(PhoneNumber);
			testPhone.number = "8881234567";
			testPhone.validPhone().should.equal(true);
		});
		it("returns false if the string includes characters that are not numbers", function() {
			var testPhone = Object.create(PhoneNumber);
			testPhone.number = "888123456B";
			testPhone.validPhone().should.equal(false);
		});
		it("returns true if the string includes characters that are all numbers", function() {
			var testPhone = Object.create(PhoneNumber);
			testPhone.number = "8881234567";
			testPhone.validPhone().should.equal(true);
		});
	});
});

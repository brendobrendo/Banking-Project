class Address {
    street: string;
    city: string;
    state: string;
    postalCode: string;

    constructor(street: string, city: string, state: string, postalCode: string) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
    }

    toString(): string {
        return `${this.street}, ${this.city}, ${this.state} ${this.postalCode}`;
    }
}

class Customer {
    customerId: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    address: Address;
    dateJoined: Date;

    constructor(
        customerId: number,
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber: string,
        address: Address,
        dateJoined?: Date
    ) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.dateJoined = dateJoined || new Date();
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

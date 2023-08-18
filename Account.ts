// Assuming you have other necessary classes such as Customer imported.

export class BankAccount {
    public balance: number;
    // ... other properties and constructor ...

    constructor(balance: number) {
        this.balance = balance;
        // ... initialization of other properties ...
    }
    // ... other methods ...
}

export class SavingsAccount extends BankAccount {
    private static interestRate?: number;

    async fetchInterestRate(): Promise<void> {
        if (!SavingsAccount.interestRate) {
            try {
                const response = await fetch('https://api.yourbank.com/interestRate');  // Replace with your API endpoint
                const data = await response.json();
                SavingsAccount.interestRate = data.rate;  // Assuming rate is a property on the returned JSON object
            } catch (error) {
                console.error("Error fetching interest rate:", error);
            }
        }
    }

    async addInterest(): Promise<void> {
        try {
            await this.fetchInterestRate();
            if (SavingsAccount.interestRate) {
                const interest = this.balance * SavingsAccount.interestRate;
                this.balance += interest;
                console.log(`Added $${interest.toFixed(2)} in interest. New Balance: $${this.balance.toFixed(2)}`);
            } else {
                console.log("Unable to add interest due to missing rate.");
            }
        } catch (error) {
            console.error("Error while adding interest:", error);
        }
    }
}

// Assuming you have proper configurations for using 'fetch' in your tsconfig.json.

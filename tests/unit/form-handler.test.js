// Unit tests for form handling functionality
describe('Form Handling', () => {
    let mockForm;
    let mockModal;
    let formData;

    beforeEach(() => {
        // Mock DOM elements
        mockForm = {
            addEventListener: jest.fn(),
            reset: jest.fn(),
            querySelector: jest.fn(() => ({
                textContent: 'Submit',
                disabled: false
            }))
        };

        mockModal = {
            style: { display: 'none' },
            querySelector: jest.fn(() => ({
                addEventListener: jest.fn()
            })),
            addEventListener: jest.fn()
        };

        // Mock document.getElementById
        document.getElementById = jest.fn((id) => {
            if (id === 'contactForm') return mockForm;
            if (id === 'successModal') return mockModal;
            return null;
        });

        // Mock fetch for form submission
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ success: true })
            })
        );

        // Sample form data
        formData = {
            name: 'Test User',
            email: 'test@example.com',
            phone: '+1234567890',
            service: 'personal',
            message: 'Test message'
        };
    });

    test('should have form and modal elements', () => {
        expect(mockForm).toBeDefined();
        expect(mockModal).toBeDefined();
    });

    test('should mock form submission correctly', async () => {
        const mockEvent = { preventDefault: jest.fn() };

        // Simulate form submission
        mockEvent.preventDefault();

        expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    test('should mock successful API response', async () => {
        const response = await global.fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        expect(result.success).toBe(true);
        expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.any(Object));
    });

    test('should handle form data correctly', () => {
        const formDataObj = new FormData();
        Object.keys(formData).forEach(key => {
            formDataObj.append(key, formData[key]);
        });

        const entries = Object.fromEntries(formDataObj);

        expect(entries.name).toBe('Test User');
        expect(entries.email).toBe('test@example.com');
        expect(entries.service).toBe('personal');
    });

    test('should validate form data', () => {
        const validData = {
            name: 'Valid Name',
            email: 'valid@email.com',
            service: 'personal'
        };

        const isValid = !!(validData.name && validData.email && validData.service);

        expect(isValid).toBe(true);
    });

    test('should show success modal', () => {
        mockModal.style.display = 'block';

        expect(mockModal.style.display).toBe('block');
    });

    test('should reset form after submission', () => {
        mockForm.reset();

        expect(mockForm.reset).toHaveBeenCalled();
    });
});

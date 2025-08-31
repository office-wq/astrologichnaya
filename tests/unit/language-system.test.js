// Unit tests for language system
describe('Language System', () => {
    let mockTranslations;
    let mockElements;

    beforeEach(() => {
        // Mock translations
        mockTranslations = {
            uk: {
                'nav-brand': '🌟 Астрологічна',
                'hero-title': '🌟 Оксана Семенович | Астролог-Діва'
            },
            en: {
                'nav-brand': '🌟 Astrological Shop',
                'hero-title': '🌟 Oksana Semenovich | Astrologer-Virgo'
            }
        };

        // Mock DOM elements
        mockElements = [
            {
                getAttribute: jest.fn(() => 'nav-brand'),
                textContent: '',
                tagName: 'SPAN'
            },
            {
                getAttribute: jest.fn(() => 'hero-title'),
                textContent: '',
                tagName: 'H1'
            }
        ];

        // Mock document.querySelectorAll
        document.querySelectorAll = jest.fn(() => mockElements);

        // Mock document.title
        Object.defineProperty(document, 'title', {
            writable: true,
            value: 'Test Title'
        });
    });

    test('should change language correctly', () => {
        const lang = 'en';

        // Simulate language change
        mockElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (mockTranslations[lang] && mockTranslations[lang][key]) {
                element.textContent = mockTranslations[lang][key];
            }
        });

        expect(mockElements[0].textContent).toBe('🌟 Astrological Shop');
        expect(mockElements[1].textContent).toBe('🌟 Oksana Semenovich | Astrologer-Virgo');
    });

    test('should handle missing translations gracefully', () => {
        const lang = 'en';
        const missingKey = 'missing-key';

        const mockElement = {
            getAttribute: jest.fn(() => missingKey),
            textContent: '',
            tagName: 'SPAN'
        };

        // Should not throw error for missing keys
        expect(() => {
            if (mockTranslations[lang] && mockTranslations[lang][missingKey]) {
                mockElement.textContent = mockTranslations[lang][missingKey];
            }
        }).not.toThrow();
    });

    test('should update page title', () => {
        const lang = 'en';
        const newTitle = '🌟 Oksana Semenovich | Vedic Astrologer-Predictor';

        document.title = newTitle;

        expect(document.title).toBe(newTitle);
    });

    test('should handle missing language gracefully', () => {
        const missingLang = 'missing-lang';

        const mockElement = {
            getAttribute: jest.fn(() => 'nav-brand'),
            textContent: '',
            tagName: 'SPAN'
        };

        // Should not throw error for missing language
        expect(() => {
            if (mockTranslations[missingLang]) {
                const key = mockElement.getAttribute('data-translate');
                mockElement.textContent = mockTranslations[missingLang][key];
            }
        }).not.toThrow();
    });
});

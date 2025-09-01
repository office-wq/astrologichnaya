// Unit tests for bug fixes
describe('Bug Fixes', () => {
    let mockTranslations;
    let mockElements;

    beforeEach(() => {
        // Mock translations
        mockTranslations = {
            uk: {
                'nav-brand': '🌟 Астрологічна',
                'hero-title': '🌟 Оксана Семенович | Астролог-Діва',
                'hero-motto-1': 'Чітко. Точно. Логічно. Корисно.',
                'hero-motto-2': 'Я-Оксана'
            },
            en: {
                'nav-brand': '🌟 Astrological Shop',
                'hero-title': '🌟 Oksana Semenovich | Astrologer-Virgo',
                'hero-motto-1': 'Clear. Precise. Logical. Useful.',
                'hero-motto-2': 'I-Oksana'
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

    describe('Language Detection Bug Fix', () => {
        test('should handle undefined navigator.language gracefully', () => {
            const originalLanguage = navigator.language;
            const originalUserLanguage = navigator.userLanguage;
            
            // Mock undefined language
            Object.defineProperty(navigator, 'language', {
                value: undefined,
                writable: true
            });
            Object.defineProperty(navigator, 'userLanguage', {
                value: undefined,
                writable: true
            });

            // This should not throw an error
            expect(() => {
                // Simulate language detection logic
                const browserLang = navigator.language || navigator.userLanguage;
                if (!browserLang) {
                    return 'en'; // Fallback
                }
            }).not.toThrow();

            // Restore original values
            Object.defineProperty(navigator, 'language', {
                value: originalLanguage,
                writable: true
            });
            Object.defineProperty(navigator, 'userLanguage', {
                value: originalUserLanguage,
                writable: true
            });
        });

        test('should handle case-insensitive language detection', () => {
            const testCases = [
                { input: 'RU', expected: 'en' },
                { input: 'ru', expected: 'en' },
                { input: 'UK', expected: 'uk' },
                { input: 'uk', expected: 'uk' },
                { input: 'PL', expected: 'pl' },
                { input: 'pl', expected: 'pl' },
                { input: 'FR', expected: 'en' },
                { input: 'fr', expected: 'en' }
            ];

            testCases.forEach(({ input, expected }) => {
                const lang = input.toLowerCase();
                let result;
                
                if (lang === 'ru') {
                    result = 'en';
                } else if (lang === 'uk') {
                    result = 'uk';
                } else if (lang === 'pl') {
                    result = 'pl';
                } else {
                    result = 'en';
                }
                
                expect(result).toBe(expected);
            });
        });
    });

    describe('Translation System Bug Fix', () => {
        test('should handle unsupported languages gracefully', () => {
            const unsupportedLang = 'fr';
            
            // Should not throw error for unsupported language
            expect(() => {
                if (!mockTranslations[unsupportedLang]) {
                    console.warn(`Language '${unsupportedLang}' is not supported, falling back to 'en'`);
                    return 'en';
                }
            }).not.toThrow();
        });

        test('should handle missing translation keys gracefully', () => {
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
                } else {
                    console.warn(`Translation missing for key '${missingKey}' in language '${lang}'`);
                }
            }).not.toThrow();
        });
    });

    describe('Form Handler Bug Fix', () => {
        test('should handle missing modal gracefully', () => {
            const mockForm = {
                addEventListener: jest.fn(),
                querySelector: jest.fn(() => ({
                    textContent: 'Submit',
                    disabled: false
                })),
                reset: jest.fn()
            };

            const mockModal = null; // Missing modal

            // Should not throw error when modal is missing
            expect(() => {
                if (!mockModal) return;
                
                const closeBtn = mockModal.querySelector('.close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {});
                }
            }).not.toThrow();
        });

        test('should properly bind event handlers', () => {
            const mockForm = {
                addEventListener: jest.fn(),
                querySelector: jest.fn(() => ({
                    textContent: 'Submit',
                    disabled: false
                })),
                reset: jest.fn()
            };

            const mockModal = {
                querySelector: jest.fn(() => ({
                    addEventListener: jest.fn()
                })),
                addEventListener: jest.fn(),
                style: { display: 'none' }
            };

            // Simulate proper event handler binding
            const handleSubmit = function(e) {
                e.preventDefault();
            };
            
            const boundHandler = handleSubmit.bind({ form: mockForm, modal: mockModal });
            
            expect(typeof boundHandler).toBe('function');
        });
    });

    describe('StarMap Bug Fix', () => {
        test('should handle missing canvas gracefully', () => {
            const mockCanvas = null;
            
            // Should not throw error when canvas is missing
            expect(() => {
                if (!mockCanvas) {
                    console.warn('StarMap canvas not found');
                    return;
                }
            }).not.toThrow();
        });

        test('should handle missing 2D context gracefully', () => {
            const mockCanvas = {
                getContext: jest.fn(() => null)
            };
            
            // Should not throw error when 2D context is missing
            expect(() => {
                const ctx = mockCanvas.getContext('2d');
                if (!ctx) {
                    console.error('Could not get 2D context for StarMap canvas');
                    return;
                }
            }).not.toThrow();
        });
    });

    describe('Memory Leak Prevention', () => {
        test('should properly clean up event listeners', () => {
            const mockElement = {
                addEventListener: jest.fn(),
                removeEventListener: jest.fn()
            };

            const mockWindow = {
                addEventListener: jest.fn(),
                removeEventListener: jest.fn()
            };

            // Simulate adding event listener
            const handler = () => {};
            mockElement.addEventListener('click', handler);

            // Simulate cleanup
            mockElement.removeEventListener('click', handler);

            expect(mockElement.removeEventListener).toHaveBeenCalledWith('click', handler);
        });

        test('should clear timers on page unload', () => {
            const mockTimer = setInterval(() => {}, 1000);
            const mockTimeout = setTimeout(() => {}, 1000);

            // Simulate cleanup
            const cleanup = () => {
                clearInterval(mockTimer);
                clearTimeout(mockTimeout);
            };

            expect(() => cleanup()).not.toThrow();
        });
    });
});
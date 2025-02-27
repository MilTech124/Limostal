# Konfiguracja wysyłania wiadomości e-mail z formularza kontaktowego

Aby umożliwić wysyłanie wiadomości e-mail z formularza kontaktowego, należy skonfigurować odpowiednie dane dostępowe w pliku `.env`. Poniżej znajdują się instrukcje, jak to zrobić.

## Krok 1: Utwórz hasło do aplikacji w koncie Google

Jeśli używasz konta Gmail, musisz utworzyć hasło do aplikacji, ponieważ Google nie pozwala na logowanie się z mniej bezpiecznych aplikacji przy włączonym uwierzytelnianiu dwuskładnikowym.

1. Przejdź do [Ustawień konta Google](https://myaccount.google.com/)
2. Wybierz "Bezpieczeństwo" z menu po lewej stronie
3. W sekcji "Logowanie do Google" znajdź "Weryfikacja dwuetapowa" i upewnij się, że jest włączona
4. Wróć do sekcji "Bezpieczeństwo" i znajdź "Hasła do aplikacji"
5. Wybierz "Inna (nazwa niestandardowa)" z listy aplikacji i wpisz "Limostal Website"
6. Kliknij "Generuj"
7. Skopiuj wygenerowane hasło (będzie to 16-znakowy ciąg bez spacji)

## Krok 2: Zaktualizuj plik .env

Otwórz plik `.env` w głównym katalogu projektu i zaktualizuj następujące zmienne:

```
EMAIL_USER=twoj-email@gmail.com
EMAIL_PASS=twoje-haslo-do-aplikacji
```

Zastąp:
- `twoj-email@gmail.com` swoim adresem e-mail Gmail
- `twoje-haslo-do-aplikacji` hasłem wygenerowanym w kroku 1

## Krok 3: Zrestartuj serwer

Po wprowadzeniu zmian w pliku `.env`, zrestartuj serwer Next.js, aby zmiany zostały zastosowane:

```bash
npm run dev
```

## Krok 4: Testowanie

Teraz możesz przetestować formularz kontaktowy, wypełniając go i klikając przycisk "Wyślij wiadomość". Wiadomość powinna zostać wysłana na adres e-mail skonfigurowany w pliku API (`limostal.garaze@gmail.com`).

## Uwagi

- Jeśli nie chcesz używać konta Gmail, możesz skonfigurować innego dostawcę usług e-mail, modyfikując plik `app/api/contact/route.js`.
- Upewnij się, że plik `.env` jest dodany do `.gitignore`, aby dane dostępowe nie zostały opublikowane w repozytorium.
- W środowisku produkcyjnym zaleca się korzystanie z usług takich jak SendGrid, Mailgun lub Amazon SES, które oferują bardziej niezawodne rozwiązania do wysyłania e-maili.

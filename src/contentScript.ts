function createSvgInMessageInputBox(): void {
    const existingIcon: Element | null = document.querySelector('#my-custom-icon');
    if (existingIcon) {
        return;
    }
    const iconWrapper: HTMLDivElement = document.createElement('div');
    const AiIcon: string = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_dd_3_37)">
  <rect x="5" y="1" width="32" height="32" rx="16" fill="white"/>
  <path d="M28.4667 18.7333C28.4667 18.8866 28.4063 19.0335 28.2989 19.1419C28.1915 19.2502 28.0458 19.3111 27.8938 19.3111H26.7482V20.4667C26.7482 20.6199 26.6879 20.7668 26.5804 20.8752C26.473 20.9836 26.3273 21.0444 26.1754 21.0444C26.0235 21.0444 25.8778 20.9836 25.7703 20.8752C25.6629 20.7668 25.6026 20.6199 25.6026 20.4667V19.3111H24.4569C24.305 19.3111 24.1593 19.2502 24.0519 19.1419C23.9445 19.0335 23.8841 18.8866 23.8841 18.7333C23.8841 18.5801 23.9445 18.4331 24.0519 18.3248C24.1593 18.2164 24.305 18.1555 24.4569 18.1555H25.6026V17C25.6026 16.8467 25.6629 16.6998 25.7703 16.5914C25.8778 16.4831 26.0235 16.4222 26.1754 16.4222C26.3273 16.4222 26.473 16.4831 26.5804 16.5914C26.6879 16.6998 26.7482 16.8467 26.7482 17V18.1555H27.8938C28.0458 18.1555 28.1915 18.2164 28.2989 18.3248C28.4063 18.4331 28.4667 18.5801 28.4667 18.7333ZM14.719 12.9555H15.8646V14.1111C15.8646 14.2643 15.925 14.4113 16.0324 14.5196C16.1398 14.628 16.2855 14.6889 16.4375 14.6889C16.5894 14.6889 16.7351 14.628 16.8425 14.5196C16.9499 14.4113 17.0103 14.2643 17.0103 14.1111V12.9555H18.1559C18.3078 12.9555 18.4535 12.8947 18.561 12.7863C18.6684 12.678 18.7287 12.531 18.7287 12.3778C18.7287 12.2245 18.6684 12.0776 18.561 11.9692C18.4535 11.8609 18.3078 11.8 18.1559 11.8H17.0103V10.6444C17.0103 10.4912 16.9499 10.3442 16.8425 10.2359C16.7351 10.1275 16.5894 10.0667 16.4375 10.0667C16.2855 10.0667 16.1398 10.1275 16.0324 10.2359C15.925 10.3442 15.8646 10.4912 15.8646 10.6444V11.8H14.719C14.5671 11.8 14.4214 11.8609 14.314 11.9692C14.2065 12.0776 14.1462 12.2245 14.1462 12.3778C14.1462 12.531 14.2065 12.678 14.314 12.7863C14.4214 12.8947 14.5671 12.9555 14.719 12.9555ZM23.8841 21.6222H23.3113V21.0444C23.3113 20.8912 23.2509 20.7442 23.1435 20.6359C23.0361 20.5275 22.8904 20.4667 22.7385 20.4667C22.5866 20.4667 22.4409 20.5275 22.3334 20.6359C22.226 20.7442 22.1657 20.8912 22.1657 21.0444V21.6222H21.5928C21.4409 21.6222 21.2952 21.6831 21.1878 21.7914C21.0804 21.8998 21.02 22.0467 21.02 22.2C21.02 22.3532 21.0804 22.5002 21.1878 22.6085C21.2952 22.7169 21.4409 22.7778 21.5928 22.7778H22.1657V23.3555C22.1657 23.5088 22.226 23.6557 22.3334 23.7641C22.4409 23.8724 22.5866 23.9333 22.7385 23.9333C22.8904 23.9333 23.0361 23.8724 23.1435 23.7641C23.2509 23.6557 23.3113 23.5088 23.3113 23.3555V22.7778H23.8841C24.036 22.7778 24.1817 22.7169 24.2892 22.6085C24.3966 22.5002 24.4569 22.3532 24.4569 22.2C24.4569 22.0467 24.3966 21.8998 24.2892 21.7914C24.1817 21.6831 24.036 21.6222 23.8841 21.6222ZM26.4124 13.5333L16.4375 23.5946C16.2226 23.8111 15.9313 23.9328 15.6276 23.9328C15.3239 23.9328 15.0326 23.8111 14.8178 23.5946L13.3356 22.101C13.2292 21.9937 13.1448 21.8663 13.0872 21.7261C13.0296 21.5859 13 21.4356 13 21.2838C13 21.1321 13.0296 20.9818 13.0872 20.8416C13.1448 20.7014 13.2292 20.574 13.3356 20.4667L23.3113 10.4054C23.4177 10.298 23.544 10.2129 23.683 10.1548C23.822 10.0967 23.971 10.0668 24.1215 10.0668C24.2719 10.0668 24.4209 10.0967 24.5599 10.1548C24.699 10.2129 24.8253 10.298 24.9317 10.4054L26.4124 11.8989C26.5188 12.0062 26.6032 12.1336 26.6608 12.2738C26.7184 12.4141 26.748 12.5644 26.748 12.7161C26.748 12.8679 26.7184 13.0182 26.6608 13.1584C26.6032 13.2986 26.5188 13.426 26.4124 13.5333ZM25.6026 12.7165L24.1211 11.2222L21.8298 13.5333L23.3113 15.0276L25.6026 12.7165Z" fill="#2563EB"/>
  </g>
  <defs>
  <filter id="filter0_dd_3_37" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3_37"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="3"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_37"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_3_37"/>
  <feOffset dy="2"/>
  <feGaussianBlur stdDeviation="2"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
  <feBlend mode="normal" in2="effect1_dropShadow_3_37" result="effect2_dropShadow_3_37"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3_37" result="shape"/>
  </filter>
  </defs>
  </svg>`;

    iconWrapper.id = 'my-custom-icon';
    iconWrapper.style.position = 'absolute';
    iconWrapper.style.top = '5px';
    iconWrapper.style.right = '5px';
    iconWrapper.style.cursor = 'pointer';
    iconWrapper.innerHTML = `${AiIcon}`;
    const messageInputBox: Element | null = document.querySelector('.msg-form__contenteditable[contenteditable="true"]');
    if (messageInputBox) {
        messageInputBox.appendChild(iconWrapper);
    }
    iconWrapper.addEventListener('click', () => {
        openGenerateBox();
    });
}

function openGenerateBox(): void {
    const existingBox: HTMLElement | null = document.getElementById('my-generate-overlay');
    if (existingBox) {
        return;
    }

    const modalHtml: string = `
    <div id="my-generate-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6); display: flex; justify-content: center; align-items: center; z-index: 9999;">
        <div id="my-generate-box" style="background: white; padding: 20px; border: 1px solid #ddd; box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); border-radius: 8px; max-width: 400px; width: 100%; margin-left: -50px;">
            <input type="text" id="userInput" placeholder="Your prompt" style="padding: 10px; width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-top: 10px;" />
            <div style="margin-top: 15px; text-align: right;">
                <button id="generateButton" style="padding: 10px 20px; background-color: #2563EB; color: white; border: none; border-radius: 4px; display: inline-flex; align-items: center;">
                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
                        <path d="M24.456 11.6075L2.45599 0.607504C2.28356 0.521271 2.08988 0.486719 1.89827 0.508009C1.70665 0.529299 1.52528 0.605523 1.37599 0.727504C1.23341 0.846997 1.12699 1.00389 1.0687 1.18055C1.0104 1.35721 1.00254 1.54662 1.04599 1.7275L4.00599 12.4975L1.00599 23.2375C0.965214 23.3886 0.960455 23.5471 0.992092 23.7003C1.02373 23.8535 1.09088 23.9972 1.18815 24.1198C1.28541 24.2423 1.41008 24.3403 1.55212 24.4059C1.69416 24.4715 1.84962 24.5029 2.00599 24.4975C2.16253 24.4966 2.31667 24.4589 2.45599 24.3875L24.456 13.3875C24.6198 13.3036 24.7573 13.1761 24.8532 13.0191C24.9492 12.862 25 12.6816 25 12.4975C25 12.3135 24.9492 12.133 24.8532 11.9759C24.7573 11.8189 24.6198 11.6914 24.456 11.6075ZM3.55599 21.6075L5.76599 13.4975H15.006V11.4975H5.76599L3.55599 3.3875L21.766 12.4975L3.55599 21.6075Z" fill="white"/>
                    </svg>
                    Generate
                </button>
            </div>
        </div>
    </div>`;

    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.innerHTML = modalHtml;
    document.body.appendChild(wrapper);

    document.getElementById('my-generate-overlay')?.addEventListener('click', (event: MouseEvent) => {
        if ((event.target as HTMLElement).id === 'my-generate-overlay') {
            closeGenerateBox();
        }
    });

    document.getElementById('generateButton')?.addEventListener('click', () => {
        const userInput: string = (document.getElementById('userInput') as HTMLInputElement).value;

        generateResponse(userInput)
            .then((generatedText: string) => {
                updateModalWithGeneratedText(generatedText);
            });
    });

    document.getElementById('closeButton')?.addEventListener('click', () => {
        closeGenerateBox();
    });
}

function generateResponse(input: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response: string = `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask regarding "${input}".`;
            resolve(response);
        }, 1000);
    });
}

function updateModalWithGeneratedText(generatedText: string): void {
    const modalBox: HTMLElement | null = document.getElementById('my-generate-box');
    if (modalBox) {
        modalBox.innerHTML = `
    <p style="margin: 0; color: #6B7280;">Generated Response:</p>
    <div style="background-color: #E0F2FE; padding: 10px; border-radius: 4px; margin-top: 10px;">
        ${generatedText}
    </div>
    <div style="margin-top: 15px; display: flex; justify-content: flex-end; gap: 10px;">
        <button id="insertButton" style="padding: 10px 20px; background-color: white; color: #4B4B4D; border: 1px solid #ccc; border-radius: 4px; display: inline-flex; align-items: center; cursor: pointer; height: 40px;">
            <svg width="16" height="16" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4px;">
                <path d="M6.1 12.3666V1.43331C6.1 1.05553 6.228 0.739087 6.484 0.483976C6.74 0.228865 7.05644 0.100864 7.43333 0.0999756C7.81111 0.0999756 8.128 0.227976 8.384 0.483976C8.64 0.739976 8.76756 1.05642 8.76667 1.43331V12.3666L12.6333 8.49998C12.8778 8.25553 13.1889 8.13331 13.5667 8.13331C13.9444 8.13331 14.2556 8.25553 14.5 8.49998C14.7444 8.74442 14.8667 9.05553 14.8667 9.43331C14.8667 9.81109 14.7444 10.1222 14.5 10.3666L8.36667 16.5C8.1 16.7666 7.78889 16.9 7.43333 16.9C7.07778 16.9 6.76667 16.7666 6.5 16.5L0.366666 10.3666C0.122222 10.1222 0 9.81109 0 9.43331C0 9.05553 0.122222 8.74442 0.366666 8.49998C0.611111 8.25553 0.922222 8.13331 1.3 8.13331C1.67778 8.13331 1.98889 8.25553 2.23333 8.49998L6.1 12.3666Z" fill="#666D80"/>
            </svg>
            Insert
        </button>

        <button id="regenerateButton" style="padding: 10px 20px; background-color: #2563EB; color: white; border: none; border-radius: 4px; display: inline-flex; align-items: center; height: 40px;">
            <svg width="16" height="16" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4px;">
                <path d="M8.5 3.24541V0L4.25 4.32724L8.5 8.65459V5.40903C12.006 5.40903 14.875 8.32995 14.875 11.9C14.875 12.9818 14.6094 14.0098 14.131 14.929L15.6719 16.4978C16.5217 15.1454 17 13.5766 17 11.9C17 7.14005 13.1749 3.24541 8.5 3.24541ZM8.5 18.391C4.9937 18.391 2.125 15.4698 2.125 11.9C2.125 10.8182 2.39062 9.79046 2.8687 8.87081L1.32812 7.30224C0.478072 8.60041 0 10.2232 0 11.9C0 16.6599 3.82511 20.5546 8.5 20.5546V23.8L12.75 19.4728L8.5 15.1454V18.391Z" fill="white"/>
            </svg>
            Regenerate
        </button>
    </div>`;

        document.getElementById('insertButton')?.addEventListener('click', () => {
            insertGeneratedText(generatedText);
            closeGenerateBox();
        });

        document.getElementById('regenerateButton')?.addEventListener('click', () => {
            (document.getElementById('userInput') as HTMLInputElement).value = "";
            modalBox.innerHTML = `
                <input type="text" id="userInput" placeholder="Your prompt" style="padding: 10px; width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-top: 10px;" />
                <div style="margin-top: 15px; text-align: right;">
                    <button id="generateButton" style="padding: 10px 20px; background-color: #2563EB; color: white; border: none; border-radius: 4px;">Generate</button>
                </div>`;

            document.getElementById('generateButton')?.addEventListener('click', () => {
                const userInput: string = (document.getElementById('userInput') as HTMLInputElement).value;
                generateResponse(userInput)
                    .then((generatedText: string) => {
                        updateModalWithGeneratedText(generatedText);
                    });
            });

            document.getElementById('closeButton')?.addEventListener('click', () => {
                closeGenerateBox();
            });
        });
    }
}

function insertGeneratedText(text: string): void {
    const messageArea: HTMLElement | null = document.querySelector('.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate');
    const existingParagraph: HTMLElement | null = messageArea?.querySelector('p') ?? null;

    if (existingParagraph) {
        existingParagraph.innerHTML = text;

        if (existingParagraph.textContent === 'Your prompt' || existingParagraph.innerHTML.trim() === '<br>') {
            existingParagraph.innerHTML = '';
        }
    } else {
        const p: HTMLParagraphElement = document.createElement('p');
        p.innerHTML = text;
        messageArea?.appendChild(p);
    }
}

function closeGenerateBox(): void {
    const overlay: HTMLElement | null = document.getElementById('my-generate-overlay');
    if (overlay) {
        overlay.remove();
    }
}

let messagingObserver: MutationObserver = new MutationObserver(() => {
    checkURLAndCreateSvg();
});

function checkURLAndCreateSvg(): void {
    if (window.location.href.includes('/messaging/thread') && document.querySelector('.msg-form__contenteditable[contenteditable="true"]')) {
        createSvgInMessageInputBox();
    }
}

messagingObserver.observe(document, { childList: true, subtree: true });
checkURLAndCreateSvg();

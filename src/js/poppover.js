export class Popover {
    constructor(popover) {
        this.popover = popover;
    }

    addPopover(element) {
        const popoverElement = document.createElement('div')
        popoverElement.classList.add("popover")

        const popoverTitle = document.createElement('h2')
        popoverTitle.classList.add("popover-header")
        popoverTitle.textContent = 'Popover title'

        const popoverMessage = document.createElement('div')
        popoverMessage.classList.add("popover-body")
        popoverMessage.textContent = "And here's some amazing content. It's very engaging. Right?"

        popoverElement.prepend(popoverTitle)
        popoverElement.append(popoverMessage)
        document.body.append(popoverElement)

        const { left, top } = element.getBoundingClientRect();

        popoverElement.style.top = top - popoverElement.offsetHeight - element.offsetHeight / 2 + 'px';
        popoverElement.style.left = left + (element.offsetHeight / 2 - popoverElement.offsetHeight) / 2 + 'px';
    }

    removePopover() {
        const _popover = document.querySelector('.popover')
        _popover.remove()
    }
}


export function menu() {
    return `<ul>
<li><a onclick="go('/', event)" href="/">Home</a></li>
<li><a onclick="go('/page1', event)" href="/page1">Page1</a></li>
<li><a onclick="go('/page2', event)" href="/page2">Page2</a></li>
<li><a onclick="go('/page3', event)" href="/page3">Page3</a></li>
</ul>`
}
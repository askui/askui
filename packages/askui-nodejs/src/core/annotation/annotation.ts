import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { DetectedElement } from '../model/annotation-result/detected-element';

export class Annotation {
  constructor(
    public image: string,
    public detected_elements: DetectedElement[] = [],
  ) { }

  toHtml() {
    const template = Annotation.getHtmlTemplate();
    const script = template.window.document.createElement('script');
    script.innerHTML = `
      var el = document.getElementsByTagName("bounding-box-renderer");
      el[0].setAttribute("shouldrenderimage", true);
      el[0].setAttribute("imagestr", "${this.image.trim()}"); 
      el[0].setAttribute("detectedobjects", JSON.stringify(${JSON.stringify(this.detected_elements)}));
    `;
    template.window.document.body.appendChild(script);
    return template;
  }

  static fromJson(json: unknown, resizeRatio = 1): Annotation {
    const annotation = json as Annotation;
    return new Annotation(
      annotation.image,
      annotation.detected_elements.map((data) => DetectedElement.fromJson(data, resizeRatio)),
    );
  }

  private static getHtmlTemplate(): JSDOM {
    const templatePath = path.join(__dirname, 'template.html');
    return new JSDOM(fs.readFileSync(templatePath, 'utf8'));
  }
}

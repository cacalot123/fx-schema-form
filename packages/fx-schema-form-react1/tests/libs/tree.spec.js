import {
    assert,
    expect
} from "chai";

import {
    TreeMap
} from "../../dts/libs/tree";

// let data = {
//     a: 1,
//     b: {
//         c: [1, 2, 3]
//     },
//     d: {
//         e: 50,
//         f: 60
//     }
// };


describe("测试treemap", () => {
    let tree, treeValue = {
        test: true
    };

    beforeEach(() => {
        tree = new TreeMap("root", treeValue);

        tree.addChild(["root", "b", "c"], {
            valid: true
        });
        tree.addChild(["root", "b", "c", 0], {
            valid: 0
        });
        tree.addChild(["root", "b", "c", 1], {
            valid: 1
        });
        tree.addChild(["root", "b", "c", 2], {
            valid: 2
        });
        tree.addChild(["root", "b", "c", 3], {
            valid: 3
        });
        tree.addChild(["root", "b", "c", 4], {
            valid: 4
        });
    });


    it("根节点", () => {
        expect(tree).to.be.a("object");
        expect(tree.value).to.equal(treeValue);
    });

    it("添加节点", () => {
        let na = tree.addChild(["root", "a"], {
            valid: false
        });

        let na0 = tree.addChild(["root", "a", 0], {
            valid: false
        });

        expect(na).to.be.a("object");
        expect(na.parent).to.equal(tree);
        expect(na.children.length).to.equal(1);
        expect(na0.parent).to.equal(na);
        expect(na0.children.length).to.equal(0);
    });

    it("删除节点", () => {
        let nbc = tree.contains("b").contains("c");
        let nbc1 = nbc.contains(1);

        // 删除 b->c->1
        nbc1.removeFromParent();

        expect(nbc.children.length).to.equal(4);
        // 删除b
        tree.contains("b").removeFromParent();

        expect(tree.contains("b")).to.equal(null);
    });

    it("交换位置", () => {
        let nbc = tree.contains("b").contains("c");
        let nbc0 = nbc.contains(0);

        expect(nbc.contains(0)).to.equal(nbc0);

        nbc0.switchOneToOneFromParent(3);

        expect(nbc.contains(0)).to.not.equal(nbc0);
        expect(nbc.contains(3)).to.equal(nbc0);

        // 不做交换处理，6大于了children的索引
        nbc0.switchOneToOneFromParent(6);

        expect(nbc.contains(0)).to.not.equal(nbc0);
        expect(nbc.contains(3)).to.equal(nbc0);
    });

    it("移动位置,当前位置小于移动的位置", () => {
        let nbc = tree.contains("b").contains("c");
        let nbc0 = nbc.contains(0);

        nbc0.insertToFromParent(3);

        expect(nbc.contains(2)).to.equal(nbc0);
    });

    it("移动位置,当前位置大于移动的位置", () => {
        let nbc = tree.contains("b").contains("c");
        let nbc4 = nbc.contains(4);

        nbc4.insertToFromParent(1);

        expect(nbc.contains(1)).to.equal(nbc4);
    });
});
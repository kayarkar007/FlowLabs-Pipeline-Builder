import { InputNode } from '../nodes/InputNode';
import { MathNode } from '../nodes/MathNode';
import { CompareNode } from '../nodes/CompareNode';
import { LogicNode } from '../nodes/LogicNode';
import { IfNode } from '../nodes/IfNode';
import { WhileLoopNode } from '../nodes/WhileLoopNode';
import { AssignmentNode } from '../nodes/AssignmentNode';
import { ForLoopNode } from '../nodes/ForLoopNode';
import { StringNode } from '../nodes/StringNode';
import { ArrayNode } from '../nodes/ArrayNode';
import { ObjectNode } from '../nodes/ObjectNode';
import { OutputNode } from '../nodes/OutputNode';
import { ConsoleLogNode } from '../nodes/ConsoleLogNode';
import { BreakNode } from '../nodes/BreakNode';
import { ContinueNode } from '../nodes/ContinueNode';
import { ReturnNode } from '../nodes/ReturnNode';
import { StartNode } from '../nodes/StartNode';
import { FunctionNode } from '../nodes/FunctionNode';
import { CallNode } from '../nodes/CallNode';
import { DelayNode } from '../nodes/DelayNode';
import { CommentNode } from '../nodes/CommentNode';
import { CustomButtonEdge } from '../components/CustomButtonEdge';

export const nodeTypes = {
    start: StartNode,
    function: FunctionNode,
    call: CallNode,
    input: InputNode,
    math: MathNode,
    compare: CompareNode,
    logic: LogicNode,
    if: IfNode,
    while: WhileLoopNode,
    assignment: AssignmentNode,
    for: ForLoopNode,
    string: StringNode,
    array: ArrayNode,
    object: ObjectNode,
    output: OutputNode,
    console: ConsoleLogNode,
    break: BreakNode,
    continue: ContinueNode,
    return: ReturnNode,
    delay: DelayNode,
    comment: CommentNode,
};

export const edgeTypes = {
    buttonEdge: CustomButtonEdge,
};
